import Home from "~/pages/Home";
import Following from "~/pages/Following";

// file cau hinh Routes

const publicRoutes = [
  { path: "/", component: Home },
  { path: "/following", component: Following },
]; // khong dang nhap van xem duoc

const privateRoutes = []; // phai dang nhap moi xem duoc

export { publicRoutes, privateRoutes };
