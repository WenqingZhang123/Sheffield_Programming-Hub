package com.one.draw;

import javax.imageio.ImageIO;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;
import java.awt.image.BufferedImage;
import java.io.File;

public class Gobang {
    //定义五子棋游戏窗口
    private JFrame f = new JFrame("五子棋游戏");

    //声明四个BufferedImage对象，分别记录四张图片
    BufferedImage table;
    BufferedImage black;
    BufferedImage white;
    BufferedImage selected;


    //声明棋盘的宽和高
    final int TABLE_WIDTH = 535;
    final int TABLE_HEIGHT = 536;

    //声明棋盘横向和纵向分别可以下多少子，他们的值都为15
    final int BOARD_SIZE = 15;

    //声明每个棋子占用棋盘的比率
    final int RATE = TABLE_WIDTH / BOARD_SIZE;

    //声明变量，记录棋子对于x方向和y方向的偏移量
    final int X_OFFSET = 5;
    final int Y_OFFSET = 6;

    //声明一个二维数组，记录棋子, 如果索引[i][j]处的值为  0-没有棋子  1-白棋  2-黑棋
    int[][] board = new int[BOARD_SIZE][BOARD_SIZE];

    //声明红色选择框的坐标  该坐标其实就是二维数组board中的索引
    int selected_X = -1;
    int selected_Y = -1;

    //自定义类，继承Canvas
    private class ChessBoard extends JPanel {
        @Override
        public void paint(Graphics g) {
            //绘图

            //绘制棋盘
            g.drawImage(table,0,0,null);

            //绘制选择框
            if (selected_X>0 && selected_Y>0){
                g.drawImage(selected,selected_X*RATE+X_OFFSET,selected_Y*RATE+Y_OFFSET,null);
            }

            //绘制棋子
            for (int i = 0; i < BOARD_SIZE; i++) {
                for (int j = 0; j < BOARD_SIZE; j++) {

                    //绘制黑棋
                    if (board[i][j] == 2){
                        g.drawImage(black,i*RATE+X_OFFSET,j*RATE+Y_OFFSET,null);
                    }
                    //绘制白棋
                    if (board[i][j] == 1){
                        g.drawImage(white,i*RATE+X_OFFSET,j*RATE+Y_OFFSET,null);
                    }
                }
            }
        }
    }

    ChessBoard chessBoard = new ChessBoard();


    //声明变量，记录当前下棋的颜色
    int board_type = 2;

    //声明底部需要用到的组件
    Panel p = new Panel();
    Button whiteBtn = new Button("白棋");
    Button blackBtn = new Button("黑棋");
    Button deleteBtn = new Button("删除");

    public void refreshBtnColor(Color whiteBtnColor,Color blackBtnColor,Color deleteBtnColor){
        whiteBtn.setBackground(whiteBtnColor);
        blackBtn.setBackground(blackBtnColor);
        deleteBtn.setBackground(deleteBtnColor);
    }

    public void init() throws Exception {
        //组装视图，编写逻辑
       whiteBtn.addActionListener(e->{
           // 修改当前要下的棋子的标志为1
           board_type = 1;
           // 刷新按钮的颜色
            refreshBtnColor(Color.GREEN,Color.GRAY,Color.GRAY);
       });

        blackBtn.addActionListener(e->{
            // 修改当前要下的棋子的标志为2
            board_type = 2;
            // 刷新按钮的颜色
            refreshBtnColor(Color.GRAY,Color.GREEN,Color.GRAY);
        });

        deleteBtn.addActionListener(e->{
            // 修改当前要下的棋子的标志为0
            board_type = 0;
            // 刷新按钮的颜色
            refreshBtnColor(Color.GRAY,Color.GRAY,Color.GREEN);
        });

        p.add(whiteBtn);
        p.add(blackBtn);
        p.add(deleteBtn);

        f.add(p,BorderLayout.SOUTH);

        //组装棋盘

        //初始化图片
        table = ImageIO.read(new File("board.jpg"));
        white = ImageIO.read(new File("white.gif"));
        black = ImageIO.read(new File("black.gif"));
        selected = ImageIO.read(new File("selected.gif"));

        //处理鼠标移动
        chessBoard.addMouseMotionListener(new MouseMotionAdapter() {
            //当鼠标移动时会调用该方法
            @Override
            public void mouseMoved(MouseEvent e) {

                selected_X = (e.getX()-X_OFFSET)/RATE;
                selected_Y = (e.getY()-Y_OFFSET)/RATE;

                chessBoard.repaint();
            }
        });

        //处理鼠标点击
        chessBoard.addMouseListener(new MouseAdapter() {
            //当鼠标被点击后 会调用这个方法
            @Override
            public void mouseClicked(MouseEvent e) {
                int xPos = (e.getX()-X_OFFSET)/RATE;
                int yPos = (e.getY()-Y_OFFSET)/RATE;

                board[xPos][yPos] = board_type;
                chessBoard.repaint();
            }

            @Override
            public void mouseExited(MouseEvent e) {
                selected_X=-1;
                selected_Y=-1;

                chessBoard.repaint();
            }
        });

        chessBoard.setPreferredSize(new Dimension(TABLE_WIDTH,TABLE_HEIGHT));
        f.add(chessBoard);

        //设置frame最佳大小并可见
        f.pack();
        f.setVisible(true);

    }

    public static void main(String[] args) throws Exception {
        new Gobang().init();
    }

}