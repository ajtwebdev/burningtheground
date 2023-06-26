
import { useEffect, useState } from 'react';
import { getAllPostsData } from '../../lib/api';
import PostList from "./components/PostList"
import { getPostByCategory } from '../../pages/recent-posts';

const RecentPostsData = () =>{
  const [postData, setPostData] = useState([]);

  useEffect(()=>{
    async function getPostsData (){
      const data = await getAllPostsData();
      const postData = data?.edges?.map(item=>{
        return item.node
    })
    const categoryPost = getPostByCategory(postData)
    
    setPostData(categoryPost)
    }
    getPostsData()
  },[])
    return <PostList posts={postData}/>
}
export default RecentPostsData