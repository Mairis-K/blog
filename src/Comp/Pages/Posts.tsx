import React from 'react'
import 'flexboxgrid'
import {
        useParams,
        useHistory
  } from "react-router-dom";
import {postData} from '../Data/post'
 
const Post = () => {
let { id } = useParams<{id: string}>();
const post = postData.find((item) => {
    return item.id === id
 
})

const history = useHistory();

if (!post) {
    history.push('/404')
}




return (
    <section>
        <div className="container">
            <div className="row">
                <div className="col-xs-12">
                    <h1>
                        {post?.title}
                    </h1>
                </div>
            </div>
        </div>
    </section>
)
}

export default Post