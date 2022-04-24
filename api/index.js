import axios from 'axios';

const http = axios.create({
  baseURL: 'http://localhost:3005/api',
});

// 轮播图
export const getSwiper = () => http.get('/swiper');
// 电影列表
export const getMovie = () => http.get('/movie');
// 电影详情
export const getMovieDetail = (params) => http.get('/detail', { params });
// 获取电影 id 集合
export const getVideos = () => http.get('/videos');
