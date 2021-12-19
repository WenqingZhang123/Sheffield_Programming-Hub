package com.one.draw;

import java.awt.*;
import java.awt.event.*;
import java.awt.image.BufferedImage;

public class HandDraw {
    //定义窗口对象
    private Frame frame = new Frame("简单手绘程序");

    //定义画图区的宽高
    private final int AREA_WIDTH = 500;
    private final int AREA_HEIGHT = 400;

    //定义一个右键菜单，用于设置画笔的颜色
    private PopupMenu colorMenu = new PopupMenu();
    private MenuItem redItem = new MenuItem("红色");
    private MenuItem greenItem = new MenuItem("绿色");
    private MenuItem blueItem = new MenuItem("蓝色");

    //定义一个变量，记录当前画笔的颜色
    private Color forceColor = Color.BLACK;

    //创建一个BufferedImage位图对象
    BufferedImage image = new BufferedImage(AREA_WIDTH, AREA_HEIGHT, BufferedImage.TYPE_INT_RGB);

    //通过位图，获取关联的Graphics对象
    Graphics g = image.getGraphics();

    //自定义一个类，继承Canvas
    private class MyCanvas extends Canvas {
        @Override
        public void paint(Graphics g) {
            g.drawImage(image, 0, 0, null);
        }
    }

    MyCanvas drawArea = new MyCanvas();


    //定义变量，记录鼠标拖动过程中，上一次所处的坐标
    private int preX = -1;
    private int preY = -1;

    public void init() {
        //组装视图，逻辑控制

        ActionListener listener = new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e) {
                String actionCommand = e.getActionCommand();
                switch (actionCommand) {
                    case "红色":
                        forceColor = Color.RED;
                        break;
                    case "绿色":
                        forceColor = Color.GREEN;
                        break;
                    case "蓝色":
                        forceColor = Color.BLUE;
                        break;
                }
            }
        };

        redItem.addActionListener(listener);
        greenItem.addActionListener(listener);
        blueItem.addActionListener(listener);

        colorMenu.add(redItem);
        colorMenu.add(greenItem);
        colorMenu.add(blueItem);

        //把colorMenu设置给绘图区域
        drawArea.add(colorMenu);

        drawArea.addMouseListener(new MouseAdapter() {
            @Override
            public void mouseReleased(MouseEvent e) {//当鼠标键抬起时被调用
                boolean popupTrigger = e.isPopupTrigger();
                if (popupTrigger) {
                    colorMenu.show(drawArea, e.getX(), e.getY());
                }

                //重置preX和preY
                preX = -1;
                preY = -1;
            }
        });

        //设置位图的背景为白色
        g.setColor(Color.white);
        g.fillRect(0, 0, AREA_WIDTH, AREA_HEIGHT);

        //通过监听鼠标的移动，完成线条绘制
        drawArea.addMouseMotionListener(new MouseMotionAdapter() {
            //该方法，当鼠标左键按下，并进行拖动时，会被调用
            @Override
            public void mouseDragged(MouseEvent e) {
                if (preX > 0 && preY > 0) {
                    g.setColor(forceColor);
                    //画线条  需要两组坐标，分别代表线条的起点和终点  e.getX(),e.getY()可以获取坐标()
                    g.drawLine(preX, preY, e.getX(), e.getY());
                }

                //修正preX和preY的值
                preX = e.getX();
                preY = e.getY();

                //重绘组件
                drawArea.repaint();
            }
        });

        drawArea.setPreferredSize(new Dimension(AREA_WIDTH,AREA_HEIGHT));
        frame.add(drawArea);
        //设置frame最佳大小并可见
        frame.pack();
        frame.setVisible(true);
    }

    public static void main(String[] args) {
        new HandDraw().init();
    }
}