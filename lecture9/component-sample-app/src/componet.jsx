import './Comment.css';



const Comment = () => {

    return (

        <div className="Comment">

            <div>

                <img src="https://loremflickr.com/cache/resized/65535_54044166001_abdf3691a1_t_100_80_nofilter.jpg" alt="User Avatar" />

                <p className="Comment-user">ID</p>

            </div>

            <div>

                <p className="Comment-text">コメント本文が入ります。</p>

            </div>

        </div>

    );

};



export default Comment;