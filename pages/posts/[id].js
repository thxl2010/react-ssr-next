import { useRouter } from 'next/router';

export default function Post({ data }) {
  const router = useRouter();
  if (router.isFallback) {
    return <div>loading</div>;
  }
  return (
    <ul>
      <li>
        <span>{data.id}</span>
        <span>{data.title}</span>
      </li>
    </ul>
  );
}

/**
 * 预渲染：基于动态路由的静态生成
 * 返回用户可以访问到的所有路由参数
 */
export async function getStaticPaths() {
  // 此处获取所有用户可以访问的路由参数
  return {
    // 返回固定格式的路由参数 id: string
    paths: [{ params: { id: '1' } }, { params: { id: '2' } }],
    //当用户访问的路由参数没有在当前函数中返回时，是否显示404页面 false∶显示 true 不显示
    fallback: false,
    // fallback: true,
  };
}

// 返回路由参数所对应的具体数据
export async function getStaticProps({ params }) {
  const { id } = params;
  let data;

  console.log('getStaticProps [id].js params.id :', id);

  switch (id) {
    case '1':
      data = { id: 1, title: 'Hello' };
      break;
    case '2':
      data = { id: 2, title: 'Next' };
      break;
    case '3':
      data = { id: 3, title: 'Hello Next' };
      break;
    default:
      data = {};
  }

  return {
    props: { data },
  };
}
