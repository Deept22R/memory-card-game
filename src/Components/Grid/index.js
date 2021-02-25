import React from 'react';
import "./styles.css"
const randomArr = [];
 const randomImgArr = [];
const imgArray = ["https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnRvb25zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://www.newidea.com.au/media/67740/mickey-main.jpg","https://img.women.com/images/images/000/017/519/large/025Pikachu_OS_anime_10.png?1460417767","https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png","http://4.bp.blogspot.com/_2pp596wRrQY/SjJnKYTy0iI/AAAAAAAAAMA/XlERA4A0yVw/s320/winniethepooh1.jpg","https://assets.hongkiat.com/uploads/cartoon-character-design-tutorials/10-fun-red-haired-boy.jpg","https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2015/12/11/default.jpeg?itok=vo_BNw9T","https://lh3.googleusercontent.com/proxy/_xDgy2SVraUiwleRUZFwQW7WK1vpyPsQUN9wPPSuXRoHnXdlZ-Y8iRb-dVM2iNrb3UtV52xwUUVYSX2GmbqXB0inYYaSaR_pY7nbr1wZRXwzKWHIUK-xGMUFqBTspIH4","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4011BG0P-41MGfZiG8k3VW5PsjlFLxJZr9Q&usqp=CAU","https://hi-static.z-dn.net/files/d3e/57932f7a0e1f0e625c04134549568a28.jpg","https://images.all-free-download.com/images/graphiclarge/snow_white_cartoon_character_6824931.jpg","https://cdn.pixabay.com/photo/2019/10/16/09/09/doraemon-4553920_1280.png","https://i.pinimg.com/originals/8d/c4/23/8dc423d06649dac62bc74d7c47cd8acb.jpg","https://1.bp.blogspot.com/-n6YS7pWH9L8/XtI0hYgqztI/AAAAAAAAEso/hhxAX4y2ooYfdYMkX6qXLLfV95rQNEHEQCK4BGAsYHg/Ninja%2BHattori%2B%2528Zona%2BAnimasi%2529%2B%25282%2529.png","https://cdn.wallpapersafari.com/4/15/j5X89Y.jpg","https://lh3.googleusercontent.com/proxy/6zjw4JJ_Tihh6K09PRepTXWnRu2kLGHvXmd7OxWPKOv8bkJ3unxnD4ZSczmplRn1byCmqkXuLh-9CjVUaQqV_SG3U9jMKtQ","https://moviesmedia.ign.com/movies/image/article/103/1036651/1_Shinji_101909_1256006885.jpg","https://cdn3.vectorstock.com/i/1000x1000/39/12/cute-cartoon-anime-little-girl-chibi-character-vector-15253912.jpg","https://images.unsplash.com/photo-1593085512500-5d55148d6f0d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjF8fGNhcnRvb25zfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60","https://www.newidea.com.au/media/67740/mickey-main.jpg","https://img.women.com/images/images/000/017/519/large/025Pikachu_OS_anime_10.png?1460417767","https://upload.wikimedia.org/wikipedia/en/thumb/3/3b/SpongeBob_SquarePants_character.svg/1200px-SpongeBob_SquarePants_character.svg.png","http://4.bp.blogspot.com/_2pp596wRrQY/SjJnKYTy0iI/AAAAAAAAAMA/XlERA4A0yVw/s320/winniethepooh1.jpg","https://assets.hongkiat.com/uploads/cartoon-character-design-tutorials/10-fun-red-haired-boy.jpg","https://www.indiantelevision.com/sites/default/files/styles/smartcrop_800x800/public/images/tv-images/2015/12/11/default.jpeg?itok=vo_BNw9T","https://lh3.googleusercontent.com/proxy/_xDgy2SVraUiwleRUZFwQW7WK1vpyPsQUN9wPPSuXRoHnXdlZ-Y8iRb-dVM2iNrb3UtV52xwUUVYSX2GmbqXB0inYYaSaR_pY7nbr1wZRXwzKWHIUK-xGMUFqBTspIH4","https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4011BG0P-41MGfZiG8k3VW5PsjlFLxJZr9Q&usqp=CAU","https://hi-static.z-dn.net/files/d3e/57932f7a0e1f0e625c04134549568a28.jpg","https://images.all-free-download.com/images/graphiclarge/snow_white_cartoon_character_6824931.jpg","https://cdn.pixabay.com/photo/2019/10/16/09/09/doraemon-4553920_1280.png","https://i.pinimg.com/originals/8d/c4/23/8dc423d06649dac62bc74d7c47cd8acb.jpg","https://1.bp.blogspot.com/-n6YS7pWH9L8/XtI0hYgqztI/AAAAAAAAEso/hhxAX4y2ooYfdYMkX6qXLLfV95rQNEHEQCK4BGAsYHg/Ninja%2BHattori%2B%2528Zona%2BAnimasi%2529%2B%25282%2529.png","https://cdn.wallpapersafari.com/4/15/j5X89Y.jpg","https://lh3.googleusercontent.com/proxy/6zjw4JJ_Tihh6K09PRepTXWnRu2kLGHvXmd7OxWPKOv8bkJ3unxnD4ZSczmplRn1byCmqkXuLh-9CjVUaQqV_SG3U9jMKtQ","https://moviesmedia.ign.com/movies/image/article/103/1036651/1_Shinji_101909_1256006885.jpg","https://cdn3.vectorstock.com/i/1000x1000/39/12/cute-cartoon-anime-little-girl-chibi-character-vector-15253912.jpg"];
// "https://data.whicdn.com/images/61156661/original.png","https://i.stack.imgur.com/nh790.png","https://cdn.mos.cms.futurecdn.net/ni3C3TVGRnyfdbUc7cSRqM.jpg","https://i.pinimg.com/originals/19/a5/c1/19a5c19b1421ab64213c3ad347face56.jpg","https://lh3.googleusercontent.com/proxy/bPl191MWi8WtF2d0rZC9S_PcBMpYbIj6bOwniVh6PvOMoLlTEn4BZ8ZTh1qILzyO_UmqCSkAzR2MpzEiDxYhoIChJ80xTSo","https://lh3.googleusercontent.com/proxy/DIBHqvwktRYIY2D92kr-hiaS6qco1XMijOlNxGWycgH1Tk9N0nXsFu4T-aIO5G2_LWbCzC6nr-M8l7sqYSOQxqABwnI_8lQKbXazZ7p6oC_S94u2KcEz49kRr7uPKqvHAKBks3-4Ah0PJCaAdFoLP3U8_rKRm3CdRctc0ihzNkksHX7HOSM4tlrQuxgpbE4","https://i.pinimg.com/originals/89/a0/0b/89a00ba60c3f5515dc900785b2b97649.png",
//                      "https://cdn.pastemagazine.com/www/blogs/lists/2020/10/29/zuko-avatar-sq.png","https://images.saymedia-content.com/.image/t_share/MTc1MTEzMDExMjY1Njc2Mzgz/my-8-least-favorite-anime-character-types.jpg","https://lh3.googleusercontent.com/proxy/8XVkwkxKVYkwQrQXctacK6lhfEQ2m2kW5g638yJxRtuoCNCGNBvIfrMj8W8DunmxMHJKHnVL2rYhPkbvFN-1PnNwsW97RaA","https://i.stack.imgur.com/nh790.png"]
const Grid = () => {
    // const imgRef = useRef(null);
    let idCount = 0;
    let imgSrcNext = "", imgSrcPrev = "";
    let clickedImgPrev;
    let clickedImgNext;
   const handleImgclick = (event)=>{
       clickedImgPrev = clickedImgNext;
       clickedImgNext = event.target;
       clickedImgNext.setAttribute("src",randomImgArr[clickedImgNext.getAttribute('id')]);
       if(!clickedImgPrev || imgSrcNext===""){
           imgSrcNext = clickedImgNext.getAttribute("src");
       }
       else{
           imgSrcPrev = imgSrcNext;
           imgSrcNext = clickedImgNext.getAttribute("src");
           if(imgSrcPrev!==imgSrcNext){
           setTimeout(()=>{
          
               clickedImgNext.setAttribute("src","https://img.freepik.com/free-vector/abstract-violet-pixel-rain-background_23-2148362568.jpg?size=626&ext=jpg");
               clickedImgPrev.setAttribute("src",'https://img.freepik.com/free-vector/abstract-violet-pixel-rain-background_23-2148362568.jpg?size=626&ext=jpg');
           },2000);
           imgSrcNext = "";
           imgSrcPrev = "";
        }
         else{
             clickedImgNext.style.opacity = "0.3";
             clickedImgPrev.style.opacity = "0.3";
             clickedImgPrev=undefined;
             clickedImgNext=undefined;
         }
       }
   }
    
    while(randomArr.length <36){
        let randomNum = Math.floor((Math.random()*36)+0);
        if(randomArr.includes(randomNum)===false){
            randomArr.push(randomNum);
            randomImgArr.push(imgArray[randomNum]);
            // console.log(randomArr);
        }
    }
    return (
        <div id="main">
            {[1,2,3,4,5,6].map((row)=>(<div key={"row"+row} id="row">
                {[1,2,3,4,5,6].map((col)=>(<div key={row*col-1} id="col">
                <img id={idCount++} style={{height:"90px",width:"87px",marginLeft:"7px",marginTop:"5px"}} onClick={handleImgclick} src="https://img.freepik.com/free-vector/abstract-violet-pixel-rain-background_23-2148362568.jpg?size=626&ext=jpg" alt="backImage"/></div>
                ))}</div>))}
        </div>
    );
};

export default Grid;