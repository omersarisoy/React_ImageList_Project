import React from "react";

const ImageList = ({images}) => {
    console.log(images)

    const picture = images.map((item) => {
        return <img key={item.id} src={item.webformatURL} alt="">
        </img>
    })

    return (
        <div>
            {picture}
        </div>
    )
}

export default ImageList