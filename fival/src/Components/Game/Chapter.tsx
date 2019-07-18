import React from 'react'

const Chapter: React.SFC = () => {
    return (
        <div className="chapter">
            <p className="size-4">
                Phasellus sollicitudin ut elit non mollis. Praesent vulputate nibh et mauris cursus, eu facilisis nunc
                accumsan. Nulla accumsan sit amet mi vitae cursus. Cras aliquet enim vel nisi imperdiet feugiat. Morbi
                ac auctor ligula. Vivamus pulvinar eleifend consequat. Ut gravida posuere justo, quis pulvinar ex
                egestas a. Aliquam dapibus orci in ultricies luctus.
            </p>
            <p className="size-5">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget pharetra felis. Praesent semper
                sollicitudin odio at dignissim. Curabitur venenatis, augue vestibulum ornare bibendum, lorem eros luctus
                dolor, fringilla pharetra est nulla non nulla. Suspendisse faucibus molestie erat in tempus.
            </p>
            <button type="button" className="btn btn-secondary pull-right mt-4">
                Next chapter
            </button>
        </div>
    )
}

export default Chapter
