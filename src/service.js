import { get, post } from '@/utils/http';

// 登录
export const getUser = async (param = {}) => {
  const url = '/user/login';
  return post(url, param);
};

// 注册
export const setRegister = async (param = {}) => {
  const url = '/user/register';
  return post(url, param);
};

// 专辑列表
export const getAlbums = async (param = {}) => {
  const url = '/album/albums';
  return get(url, param);
};
