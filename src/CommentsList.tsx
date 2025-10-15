
export default function CommentsList({ comments }) {
  

    return (
        <>
            <h3>Comments:</h3>
            { comments.map( content => (
                <div className="commentsSection" key={content.text}>
                    <h4>{content.postedBy}</h4>
                    <p>{content.text}</p>
                </div>
            ))}
        </>
    )
}
