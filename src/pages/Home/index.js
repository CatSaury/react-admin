import React from "react";
import { Outlet, Navigate } from "react-router-dom";

import { isAuth } from "../../utils";

import styles from "./index.module.less";

import LogImg from "../../assets/log.svg";

export default function Home() {
  return isAuth() ? (
    <div className={styles.root}>
      {/* 左侧菜单 */}
      <aside className={styles.aside}>
        {/* log */}
        <div className={styles.log}>
          <a href="/#">
            <img src={LogImg} alt="log" />
            <h1>Ant Design Pro</h1>
          </a>
        </div>
        {/* 菜单 */}
        <div className={styles.menu}>

        </div>
      </aside>
      {/* 右侧 */}
      <main className={styles.main}>
        {/* 头部导航 */}
        <header className={styles.header}>
          <nav>导航</nav>
        </header>

        {/* 内容区域 */}
        <article className={styles.article}>
          {/* 路由渲染 */}
          <Outlet />
        </article>

        {/* 底部 */}
        <footer className={styles.footer}>footer</footer>
      </main>
    </div>
  ) : (
    <Navigate to="/login" replace />
  );
}
