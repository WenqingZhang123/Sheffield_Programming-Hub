package com.one.draw;

import javax.imageio.ImageIO;
import java.awt.*;
import java.awt.event.WindowAdapter;
import java.awt.event.WindowEvent;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;


public class ReadAndSaveImage {

    private Frame frame = new Frame("图片查看器");

    MenuBar menuBar = new MenuBar();
    Menu menu = new Menu("文件");
    MenuItem open = new MenuItem("打开");
    MenuItem save = new MenuItem("另存为");

    //声明BufferedImage对象，记录本地存取到内存中的图片
    BufferedImage image;
    private class MyCanvas extends Canvas{
        @Override
        public void paint(Graphics g) {
            g.drawImage(image,0,0,null);
        }
    }
    MyCanvas drawArea = new MyCanvas();

    public void init() throws Exception{
        //组装视图

        open.addActionListener(e->{
            //打开一个文件对话框
            FileDialog fileDialog = new FileDialog(frame,"打开图片",FileDialog.LOAD);
            fileDialog.setVisible(true);

            //获取用户选择的图片路径以及名称
            String dir = fileDialog.getDirectory();
            String fileName = fileDialog.getFile();

            try {
                image = ImageIO.read(new File(dir,fileName));
                drawArea.repaint();
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        });

        save.addActionListener(e->{
            //展示一个文件对话框
            FileDialog fileDialog = new FileDialog(frame,"保存图片",FileDialog.SAVE);
            fileDialog.setVisible(true);

            //获取用户设置的保存路径以及文件名称
            String dir = fileDialog.getDirectory();
            String fileName = fileDialog.getFile();

            try {
                ImageIO.write(image,"JPEG",new File(dir,fileName));
            } catch (IOException ex) {
                ex.printStackTrace();
            }
        });

        menu.add(open);
        menu.add(save);

        menuBar.add(menu);

        //把菜单条放入到窗口中
        frame.setMenuBar(menuBar);
        frame.add(drawArea);

        frame.setBounds(200,200,740,508);

        frame.setVisible(true);

        frame.addWindowListener(new WindowAdapter() {
            @Override
            public void windowClosing(WindowEvent e) {
                System.exit(0);
            }
        });
    }



    public static void main(String[] args) throws Exception {
        new ReadAndSaveImage().init();
    }
}
