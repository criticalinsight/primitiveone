import { css } from "frontity";
import { discolight, animatedgradient } from "../scenes/glamourmagic";

const discoListStyle = css`

  h1 {
    text-align: center;
    text-shadow: .15rem .15rem rgba(173, 216, 230, .5);
  }

  hr {
    display: block;
    margin-top: 2rem;
    margin-bottom: 2rem;
    clear:both;
  }

  .thinglist {
    display: flex;
    margin: 1rem auto;
    padding: 1rem;
    width: 90%;
    flex-wrap: wrap;
    list-style-type: none;
    
    background: #ccc;
    border-radius: .3rem;
    box-shadow: 0 0 3px rgba(0,0,0,0.6),
                0 19px 38px rgba(0,0,0,0.30),
                0 15px 12px rgba(0,0,0,0.22),
                inset 0 0 6px rgba(0,0,0,0.3);

    li {
      display: flex;
      margin: 0;
      padding: .2rem .3rem .6rem;
      min-height: 130px;
      flex: 33%;

      font-size: 1.3rem;
      font-family: 'Abril Fatface', Georgia, cursive; 
      font-weight: 700;
      color: rgba(12,17,43,1);
      text-align: center;
      align-items: center;
      justify-content: center;
      text-shadow:
        1px 0 6px #fff,
        1px 1px 0px #fff,
        7px 4px 2px rgba(0,0,0,0.3);
  
      background-color: #232b2b;
      border: solid 2px rgb(12,17,43);
    }

    li:nth-of-type(odd) {
      /* will-change: background, box-shadow; */
      animation: ${discolight} 5s ease-out infinite;
      animation-direction: alternate;
    }
    li:nth-of-type(even) {
      /* will-change: background, box-shadow; */
      animation: ${discolight} 5s ease-out infinite;
      animation-direction: alternate;

    }

    li:nth-of-type(2) { animation-delay: .2s; }
    li:nth-of-type(3) { animation-delay: .4s; }
    li:nth-of-type(4) { animation-delay: .6s; }
    li:nth-of-type(5) { animation-delay: .8s; }
    li:nth-of-type(6) { animation-delay: 1s; }
    li:nth-of-type(7) { animation-delay: 1.2s; }
    li:nth-of-type(8) { animation-delay: 1.4s; }
    li:nth-of-type(9) { animation-delay: 1.6s; }

  }




  .q-wrap {
    margin : 5px 0 40px auto; 
    padding : 10px 20px 20px; 
    position : relative; 
    width : 80%; 
  } 
  .q-wrap p { margin : 0; padding : 0; }

  .q-wrap blockquote {
    margin : 0; 
    padding : 0; 
    padding-top : 150px; 
    position : relative; 
    padding-left: 1.5rem;
    background-color: transparent !important;
  } 
  .q-wrap cite {
    padding: 3px 6px 3px 20px;
    font-size : 1.5rem; 
    font-style : normal;
    font-family: 'Amatic SC', 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
  } 
  .q-style-1 blockquote { border-left: 4px solid rgba(135, 175,	78, .8);}
  .q-style-2 blockquote { border-left: 4px solid rgba(235, 150, 108, 0.8) !important; } 

  .q-style-1 blockquote:after, .q-style-2 blockquote:after {
      background: none repeat scroll 0 0 rgba(135, 175,	78, 0.8);
      border-radius: 50% 50% 50% 50%;
      color: rgba(255, 255, 255, 0.5);
      content: "❞";
      font-family: 'icons';
      font-size: 70px;
      height: 130px;
      left: 50%;
      line-height: 130px;
      margin-left: -65px;
      position: absolute;
      text-align: center;
      text-shadow: 0 1px 1px rgba(255, 255, 255, 0.1);
      top: 0;
      width: 130px;
  }
  .q-style-1 blockquote::before, .q-style-2 blockquote::before {
      border-left: 5px solid rgba(135, 175,	78, .1) !important;
      border-radius: 50% 50% 50% 50%;
      content: "";
      height: 500px;
      left: -50px;
      position: absolute;
      top: 0;
      width: 500px;
      z-index: -1;
  }
  .q-style-2 blockquote:after {
    background: none repeat scroll 0 0 rgba(235, 150, 108, 0.8);
  }
  .q-style-2 blockquote::before {
    border-left: 5px solid rgba(235, 150, 108, 0.1) !important;
  }
  .q-style-1 blockquote p,
  .q-style-2 blockquote p {
    background : none repeat scroll 0 0 rgba(255, 255, 255, 0.5); 
    box-shadow : 0 -6px 0 rgba(135, 175,	78, 0.2); 
    color : rgba(135, 175,	78, 0.8); 
    display : inline; 
    font-family : Baskerville, Georgia, serif; 
    font-style : italic; 
    font-size : 28px; 
    line-height : 46px; 
    text-shadow : 0 1px 1px rgba(255, 255, 255, 0.5);  
  } 
  .q-style-2 blockquote p {
    box-shadow : 0 -6px 0 rgba(235, 150, 108, 0.2); 
    color : rgba(235, 150, 108, 0.8); 
  }

  

  @media screen and (min-width: 576px) {
    .split-col {
      column-count: 2;
    }
  }

  @media screen and (min-width: 768px) {
    .thinglist {
      width: 80%;
    }
    .split-col {
      column-count: 2;
    }
    .q-wrap {
      width : 60%; 
    }
  }

  @media screen and (min-width: 992px) {
    .split-col {
      column-count: 2;
    }
  }

`;

// p139: homepage
// p8: design
// p1904: dev
// p2102: data
// p2128: marketing
// p2136: housekeeping

/* Homepage: p139 */
const pagehome = css`
  #page-139 {
    h3 {
      margin-bottom: 1.2rem;
      font-weight: bold;
      color: rgba(12, 17, 43, 0.9);

      &::after {
        content: " ";
        margin: 1.2rem auto 0 0;
        width: 5rem;
        height: 3px;
        display: block;
        background: rgba(135, 175,	78, .8) !important;
      }

      &:nth-of-type(even)::after {
        background: rgba(235, 150, 108, .8) !important;
      }
    }
  }
`;

/* Design Page: p8 */
const pagedesign = css`
  #page-8 {

    background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(12, 17, 43, 0.6)),
                url(https://wp.primitivedigital.uk/wp-content/uploads/stone/aztec.png) repeat fixed;
                background-size: 400px;
                
    .thinglist { background: url(https://wp.primitivedigital.uk/wp-content/uploads/stone/grayrock.png); }

    h1 {
      width: 90%;
      padding: 2rem 0;
      margin: 1rem auto;

      font-family: 'Abril Fatface', Georgia, cursive; 
      font-size: 4.3rem;
      color: rgba(12,17,43, .9);
      text-shadow: -8px 1px 2px rgba(0,255,255, .4),
                    8px -1px 2px rgba(255,0,255, .4);

      &::after {
        content: " ";
        margin: .9rem auto .6rem;
        width: 60%;
        height: 5px;
        display: block;
        border-top: 2px solid black;
        opacity: .8;
        box-shadow: -10px 2px 5px rgba(0,255,255, .4), 10px -2px 5px rgba(255,0,255, .4);
        background-image: linear-gradient(90deg, rgba(255,0,255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
      }

      &::before {
        content: " ";
        margin: .6rem auto .6rem;
        width: 40%;
        height: 5px;
        display: block;
        border-top: 2px solid black;
        opacity: .8;
        box-shadow: -10px 2px 5px rgba(0,255,255, .4), 10px -2px 5px rgba(255,0,255, .4);
        background-image: linear-gradient(90deg, rgba(255,0,255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
      }
    }

    .list-wrap {
      margin : 5px 0 40px; 
      padding : 10px 20px 20px; 
      position : relative; 
      width: 50%; 
      float: left;

      text-align: center;

      h2 {
        position: relative;
        font-family: 'Playfair Display'; 
        color: #000;
        font-size:  5rem;
        line-height: 4.5rem;
        letter-spacing: 2px;
        font-weight: 400;
        text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
        0px 1px 0 rgba(255,255,255, 0.6),
        1px 0px 0 rgba(255,255,255, 0.6),
        -1px -1px 0 rgba(255,255,255, 0.6),
        -0px -1px 0 rgba(255,255,255, 0.6),
        -1px -0px 0 rgba(255,255,255, 0.6);
        
        span {
          width: 100%;
          display: block;
          font-size:  2rem;
          color: #fff;
          font-family: 'Pacifico';
          text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
        }

        &::before {
          content: " ";
          display: block;
          width: 4rem;
          height: 12rem;
          position: absolute;
          top: 2rem;
          left: 1.5rem;
          border-top: 1px solid #fff;
          border-left: 1px solid #fff;
          box-shadow: -2px -1px 2px rgba(0,255,255,.4), -1px -2px 2px rgba(255,0,255,.4);
        }
      }
      h3 {
        margin-top: 0;
        margin-bottom: 3rem;
        padding-top: 0;
        font-size:  5rem;
        line-height: 4.5rem;
        letter-spacing: 2px;
        color: #000;
        text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
          0px 1px 0 rgba(255,255,255, 0.6),
          1px 0px 0 rgba(255,255,255, 0.6),
          -1px -1px 0 rgba(255,255,255, 0.6),
          -0px -1px 0 rgba(255,255,255, 0.6),
          -1px -0px 0 rgba(255,255,255, 0.6);

        span {
          width: 100%;
          display: block;
          font-size:  2rem;
          color: #fff;
          font-family: 'Pacifico';
          text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
        }

        &::after {
          content: " ";
          display: block;
          width: 4rem;
          height: 12rem;
          position: absolute;
          top: 6rem;
          right: 1.5rem;
          border-bottom: 1px solid #fff;
          border-right: 1px solid #fff;
          box-shadow: 2px 1px 2px rgba(0,255,255,.4), 1px 2px 2px rgba(255,0,255,.4);
        }
      }

      ul {
       /* margin: 2rem; */
        margin: 1rem 1.5rem 0 5rem;
        padding: 2rem 1rem;
        background: rgba(255,255,255,0.5);
        border: 2px solid #212529;
      }

      li {
        margin: 0;
        padding: .2rem .5rem;
        font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
        font-size: 1.7rem;
        line-height: 1.6;
        list-style: none;
        color: #212529;
        text-shadow: 1px 1px 0 rgba(255,255,255, 0.6);
        
      }
      li:last-of-type {
        padding: 1rem;
        font-size: 1rem;
        font-family: "Pacifico";
      }

      /* end list-wrap */
    } 

    .q-wrap {
      margin : 9rem 0 40px; 
      padding : 10px 20px 20px; 
      position : relative; 
      width : 50%; 
      float: right;

      blockquote {
        border-left: 4px solid rgba(1, 255, 137, 0.6) !important;

        p {
          padding: .5rem 0;
          line-height: 4rem;
          background: rgba(255,255,255,0.6);
          /* box-shadow: 0 -6px 0 rgba(122, 95, 255, 0.8); */
          box-shadow: 0 -6px 0  rgba(1, 255, 137, 0.6);
          color: #212529;
          white-space: pre-wrap;
          text-shadow: 0 1px 1px rgba(255,255,255,0.5);
          border-width: 0.5rem 0;

          span {
            display: inline-block;
            padding-left: 1rem;
            padding-right: 1rem;
          }

          &::after {
            content: "";
            position: absolute;
            top: -0.5rem;
            right: 100%;
            bottom: -0.5rem;
            width: 0.5rem;
          }
        }

        cite {
          font-size: 1.8rem;
          color: #212529;
          text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
        }
      
        &::after {
          background: rgba(1, 255, 137, 0.6);
        }
      }
    } 
  }
`;


/* Development Page: p1904 */
const pagedev = css`
#page-1904 {

  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(12, 17, 43, 0.6)),
              url(https://wp.primitivedigital.uk/wp-content/uploads/stone/junglerock.png) repeat fixed;
              background-size: 300px;
              
  .thinglist { background: url(https://wp.primitivedigital.uk/wp-content/uploads/stone/lava.png); }

  h1 {
    width: 70%;
    max-width: 900px;
    padding: 2rem 0;
    margin: 1rem auto;

    font-size: 4.5rem;
    font-family: "Hepta Slab";
    font-size: 4rem;
    font-weight: bold;
    letter-spacing: 1px;
    text-shadow: 2px 1px 0 #eee, 4px 3px 0 #707070;

    &::after {
      content: " ";
      margin-top: .9rem;
      width: 100%;
      height: 12px;
      display: block;
      border-top: 1px solid rgba(12,17,43,.6);
      border-left: 1px solid rgba(12,17,43,.6);
      box-shadow: 1px 1px 0 rgba(238, 238, 238, .6), 3px 2px 0 rgba(	112, 112, 112, .6);
      background-image: linear-gradient(90deg, rgba(122, 95, 255, 0.8) 15%, rgba(1, 255, 137, 0.6) 35%, rgba(122, 95, 255, 0.8) 85%);
      
      /* animation: ${animatedgradient} 6s linear infinite;
      animation-direction: alternate; */
    }
  }

  .list-wrap {
    margin : 5px 0 40px; 
    padding : 10px 20px 20px; 
    position : relative; 
    width: 50%; 
    float: left;
    text-align: center;

    h2 {
      position: relative;
      font-family: 'Playfair Display'; 
      color: #000;
      font-size:  5rem;
      line-height: 4.5rem;
      letter-spacing: 2px;
      font-weight: 400;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
      0px 1px 0 rgba(255,255,255, 0.6),
      1px 0px 0 rgba(255,255,255, 0.6),
      -1px -1px 0 rgba(255,255,255, 0.6),
      -0px -1px 0 rgba(255,255,255, 0.6),
      -1px -0px 0 rgba(255,255,255, 0.6);
      
      span {
        width: 100%;
        display: block;
        font-size:  2rem;
        color: #fff;
        font-family: 'Pacifico';
        text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
      }

      &::before {
        content: " ";
        display: block;
        width: 4rem;
        height: 12rem;
        position: absolute;
        top: 2rem;
        left: 1.5rem;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        box-shadow: -2px -1px 2px rgba(0,255,255,.4), -1px -2px 2px rgba(255,0,255,.4);
      }
    }
    h3 {
      margin-top: 0;
      margin-bottom: 3rem;
      padding-top: 0;
      font-size:  5rem;
      line-height: 4.5rem;
      letter-spacing: 2px;
      color: #000;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
        0px 1px 0 rgba(255,255,255, 0.6),
        1px 0px 0 rgba(255,255,255, 0.6),
        -1px -1px 0 rgba(255,255,255, 0.6),
        -0px -1px 0 rgba(255,255,255, 0.6),
        -1px -0px 0 rgba(255,255,255, 0.6);

      span {
        width: 100%;
        display: block;
        font-size:  2rem;
        color: #fff;
        font-family: 'Pacifico';
        text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
      }

      &::after {
        content: " ";
        display: block;
        width: 4rem;
        height: 12rem;
        position: absolute;
        top: 6rem;
        right: 1.5rem;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        box-shadow: 2px 1px 2px rgba(0,255,255,.4), 1px 2px 2px rgba(255,0,255,.4);
      }
    }

    ul {
     /* margin: 2rem; */
      margin: 1rem 1.5rem 0 5rem;
      padding: 2rem 1rem;
      background: rgba(255,255,255,0.5);
      border: 2px solid #212529;
    }

    li {
      margin: 0;
      padding: .2rem .5rem;
      font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
      font-size: 1.7rem;
      line-height: 1.6;
      list-style: none;
      color: #212529;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6);
      
    }
    li:last-of-type {
      padding: 1rem;
      font-size: 1rem;
      font-family: "Pacifico";
    }

    /* end list-wrap */
  } 

  .q-wrap {
    margin : 9rem 0 40px; 
    padding : 10px 20px 20px; 
    position : relative; 
    width : 50%; 
    float: right;

    blockquote {
      border-left: 4px solid rgba(122,95,255,0.8) !important;

      p {
        padding: .5rem 0;
        line-height: 4rem;
        background: rgba(255,255,255,0.6);
        box-shadow: 0 -6px 0 rgba(122,95,255,0.8);
        color: #212529;
        white-space: pre-wrap;
        text-shadow: 0 1px 1px rgba(255,255,255,0.5);
        border-width: 0.5rem 0;

        span {
          display: inline-block;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        &::after {
          content: "";
          position: absolute;
          top: -0.5rem;
          right: 100%;
          bottom: -0.5rem;
          width: 0.5rem;
        }
      }

      cite {
        font-size: 1.8rem;
        color: #212529;
        text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
      }
    
      &::after {
        background: rgba(122,95,255,0.8);
      }
    }
  } 
}

`;

/* Data Page: p2102 */
const pagedata = css`
#page-2102 {

  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(12, 17, 43, 0.6)),
              url(https://wp.primitivedigital.uk/wp-content/uploads/stone/rockwall.png) repeat fixed;
              background-size: 300px;
              
  .thinglist { background: url(https://wp.primitivedigital.uk/wp-content/uploads/stone/grayrock.png); }

  h1 {
    padding: 2rem 0 2rem;
    margin: 0 15% 1.5rem;
    color: rgba(12,17,43, .9);
    font-size: 4rem;
    font-family: "Playfair Display";
    font-weight: bold;
    text-shadow: 2px 1px 0 #fff, -8px -8px 0 rgba(0,168,255,0.5), 8px 8px 0 rgba(255,0,180,0.5);

    &::after {
      content: " ";
      margin-top: .6rem;
      width: 100%;
      height: 12px;
      display: block;
      border-top: 1px solid rgba(12,17,43,.6);
      border-left: 1px solid rgba(12,17,43,.6);
      background: linear-gradient(
      -45deg, 
      rgba(255,0,180,0.5) 25%, 
      rgba(0,168,255,0.5) 25%, 
      rgba(0,168,255,0.5) 50%, 
      rgba(255,0,180,0.5) 50%, 
      rgba(255,0,180,0.5) 75%, 
      rgba(0,168,255,0.5) 75%, 
      rgba(0,168,255,0.5));
      background-size: 20px 20px;
      background-position: 0 0;
      box-shadow: 1px 1px 0 rgba(238, 238, 238, .6), 3px 2px 0 rgba(	112, 112, 112, .6);

      /* animation: ${animatedgradient} 6s linear infinite;
      animation-direction: alternate; */
    }
  }

  .list-wrap {
    margin : 5px 0 40px; 
    padding : 10px 20px 20px; 
    position : relative; 
    width: 50%; 
    float: left;
    text-align: center;

    h2 {
      position: relative;
      font-family: 'Playfair Display'; 
      color: #000;
      font-size:  5rem;
      line-height: 4.5rem;
      letter-spacing: 2px;
      font-weight: 400;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
      0px 1px 0 rgba(255,255,255, 0.6),
      1px 0px 0 rgba(255,255,255, 0.6),
      -1px -1px 0 rgba(255,255,255, 0.6),
      -0px -1px 0 rgba(255,255,255, 0.6),
      -1px -0px 0 rgba(255,255,255, 0.6);
      
      span {
        width: 100%;
        display: block;
        font-size:  2rem;
        color: #fff;
        font-family: 'Pacifico';
        text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
      }

      &::before {
        content: " ";
        display: block;
        width: 4rem;
        height: 12rem;
        position: absolute;
        top: 2rem;
        left: 1.5rem;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        box-shadow: -2px -1px 2px rgba(0,255,255,.4), -1px -2px 2px rgba(255,0,255,.4);
      }
    }
    h3 {
      margin-top: 0;
      margin-bottom: 3rem;
      padding-top: 0;
      font-size:  5rem;
      line-height: 4.5rem;
      letter-spacing: 2px;
      color: #000;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
        0px 1px 0 rgba(255,255,255, 0.6),
        1px 0px 0 rgba(255,255,255, 0.6),
        -1px -1px 0 rgba(255,255,255, 0.6),
        -0px -1px 0 rgba(255,255,255, 0.6),
        -1px -0px 0 rgba(255,255,255, 0.6);

      span {
        width: 100%;
        display: block;
        font-size:  2rem;
        color: #fff;
        font-family: 'Pacifico';
        text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
      }

      &::after {
        content: " ";
        display: block;
        width: 4rem;
        height: 12rem;
        position: absolute;
        top: 6rem;
        right: 1.5rem;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        box-shadow: 2px 1px 2px rgba(0,255,255,.4), 1px 2px 2px rgba(255,0,255,.4);
      }
    }

    ul {
     /* margin: 2rem; */
      margin: 1rem 1.5rem 0 5rem;
      padding: 2rem 1rem;
      background: rgba(255,255,255,0.5);
      border: 2px solid #212529;
    }

    li {
      margin: 0;
      padding: .2rem .5rem;
      font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
      font-size: 1.7rem;
      line-height: 1.6;
      list-style: none;
      color: #212529;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6);
      
    }
    li:last-of-type {
      padding: 1rem;
      font-size: 1rem;
      font-family: "Pacifico";
    }

    /* end list-wrap */
  } 

  .q-wrap {
    margin : 9rem 0 40px; 
    padding : 10px 20px 20px; 
    position : relative; 
    width : 50%; 
    float: right;

    blockquote {
      border-left: 4px solid rgba(0,168,255,0.6) !important;

      p {
        padding: .5rem 0;
        line-height: 4rem;
        background: rgba(255,255,255,0.6);
        box-shadow: -3px -6px 0 rgba(0,168,255,0.6), 3px 3px 0 rgba(255,0,180,0.6);
        color: #212529;
        white-space: pre-wrap;
        text-shadow: 0 1px 1px rgba(255,255,255,0.5);
        border-width: 0.5rem 0;

        span {
          display: inline-block;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        &::after {
          content: "";
          position: absolute;
          top: -0.5rem;
          right: 100%;
          bottom: -0.5rem;
          width: 0.5rem;
        }
      }

      cite {
        font-size: 1.8rem;
        color: #212529;
        text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
      }
    
      &::after {
        background: rgba(0,168,255,0.7);
      }
    }
  } 
}

`;

/* Marketing Page: p2128 */
const pagemarketing = css`
#page-2128 {

  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(12, 17, 43, 0.6)),
              url(https://wp.primitivedigital.uk/wp-content/uploads/stone/duowall.png) repeat fixed;
              background-size: 300px;
              
  .thinglist { background: url(https://wp.primitivedigital.uk/wp-content/uploads/stone/grayrock.png); }

  h1 {
    padding: 2rem 0 2rem;
    margin: 0 15% 1.5rem;
    color: rgba(12,17,43, .9);
    font-size: 4rem;
    font-family: "Hepta Slab";
    font-weight: bold;
    text-shadow: 2px 1px 0 #fff, -8px -8px 0 rgba(0,168,255,0.5), 8px 8px 0 rgba(255,0,180,0.5);

    &::after {
      content: " ";
      margin-top: .6rem;
      width: 100%;
      height: 12px;
      display: block;
      border-top: 1px solid rgba(12,17,43,.6);
      border-left: 1px solid rgba(12,17,43,.6);
      background: linear-gradient(
      -45deg, 
      rgba(255,0,180,0.5) 25%, 
      rgba(0,168,255,0.5) 25%, 
      rgba(0,168,255,0.5) 50%, 
      rgba(255,0,180,0.5) 50%, 
      rgba(255,0,180,0.5) 75%, 
      rgba(0,168,255,0.5) 75%, 
      rgba(0,168,255,0.5));
      background-size: 20px 20px;
      background-position: 0 0;
      box-shadow: 1px 1px 0 rgba(238, 238, 238, .6), 3px 2px 0 rgba(	112, 112, 112, .6);

      /* animation: ${animatedgradient} 6s linear infinite;
      animation-direction: alternate; */
    }
  }

  .list-wrap {
    margin : 5px 0 40px; 
    padding : 10px 20px 20px; 
    position : relative; 
    width: 50%; 
    float: left;
    text-align: center;

    h2 {
      position: relative;
      font-family: 'Playfair Display'; 
      color: #000;
      font-size:  5rem;
      line-height: 4.5rem;
      letter-spacing: 2px;
      font-weight: 400;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
      0px 1px 0 rgba(255,255,255, 0.6),
      1px 0px 0 rgba(255,255,255, 0.6),
      -1px -1px 0 rgba(255,255,255, 0.6),
      -0px -1px 0 rgba(255,255,255, 0.6),
      -1px -0px 0 rgba(255,255,255, 0.6);
      
      span {
        width: 100%;
        display: block;
        font-size:  2rem;
        color: #fff;
        font-family: 'Pacifico';
        text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
      }

      &::before {
        content: " ";
        display: block;
        width: 4rem;
        height: 12rem;
        position: absolute;
        top: 2rem;
        left: 1.5rem;
        border-top: 1px solid #fff;
        border-left: 1px solid #fff;
        box-shadow: -2px -1px 2px rgba(0,255,255,.4), -1px -2px 2px rgba(255,0,255,.4);
      }
    }
    h3 {
      margin-top: 0;
      margin-bottom: 3rem;
      padding-top: 0;
      font-size:  5rem;
      line-height: 4.5rem;
      letter-spacing: 2px;
      color: #000;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6), 
        0px 1px 0 rgba(255,255,255, 0.6),
        1px 0px 0 rgba(255,255,255, 0.6),
        -1px -1px 0 rgba(255,255,255, 0.6),
        -0px -1px 0 rgba(255,255,255, 0.6),
        -1px -0px 0 rgba(255,255,255, 0.6);

      span {
        width: 100%;
        display: block;
        font-size:  2rem;
        color: #fff;
        font-family: 'Pacifico';
        text-shadow: -2px 1px 2px rgba(0,255,255,.4), 2px -1px 2px rgba(255,0,255,.4);
      }

      &::after {
        content: " ";
        display: block;
        width: 4rem;
        height: 12rem;
        position: absolute;
        top: 6rem;
        right: 1.5rem;
        border-bottom: 1px solid #fff;
        border-right: 1px solid #fff;
        box-shadow: 2px 1px 2px rgba(0,255,255,.4), 1px 2px 2px rgba(255,0,255,.4);
      }
    }

    ul {
     /* margin: 2rem; */
      margin: 1rem 1.5rem 0 5rem;
      padding: 2rem 1rem;
      background: rgba(255,255,255,0.5);
      border: 2px solid #212529;
    }

    li {
      margin: 0;
      padding: .2rem .5rem;
      font-family: 'Slabo 27px', Georgia, 'Times New Roman', Times, serif;
      font-size: 1.7rem;
      line-height: 1.6;
      list-style: none;
      color: #212529;
      text-shadow: 1px 1px 0 rgba(255,255,255, 0.6);
      
    }
    li:last-of-type {
      padding: 1rem;
      font-size: 1rem;
      font-family: "Pacifico";
    }

    /* end list-wrap */
  } 

  .q-wrap {
    margin : 9rem 0 40px; 
    padding : 10px 20px 20px; 
    position : relative; 
    width : 50%; 
    float: right;

    blockquote {
      border-left: 4px solid rgba(0,168,255,0.6) !important;

      p {
        padding: .5rem 0;
        line-height: 4rem;
        background: rgba(255,255,255,0.6);
        box-shadow: -3px -6px 0 rgba(0,168,255,0.6), 3px 3px 0 rgba(255,0,180,0.6);
        color: #212529;
        white-space: pre-wrap;
        text-shadow: 0 1px 1px rgba(255,255,255,0.5);
        border-width: 0.5rem 0;

        span {
          display: inline-block;
          padding-left: 1rem;
          padding-right: 1rem;
        }

        &::after {
          content: "";
          position: absolute;
          top: -0.5rem;
          right: 100%;
          bottom: -0.5rem;
          width: 0.5rem;
        }
      }

      cite {
        font-size: 1.8rem;
        color: #212529;
        text-shadow: 1px 1px 0 rgba(255,255,255,0.5);
      }
    
      &::after {
        background: rgba(0,168,255,0.7);
      }
    }
  } 
}

`;


/* Contact Page: p19466 */
const pagecontact = css`
#page-19466 {

  .wpcf7 {
    margin: 2rem auto;
    width: calc(vw / 3);
    min-width: 300px;
    max-width: 600px;
    position: relative;

    form {
      padding: 2rem;
      border: 1px solid #e7e7e7;

      font-family: "Slabo 27px";
      
      background: #26D0CE;
      background-image: linear-gradient(to top, #1a2980, #26d0ce);
      box-shadow: 5px 5px rgba(0, 98, 90, 0.4),
              10px 10px rgba(0, 98, 90, 0.3),
              15px 15px rgba(0, 98, 90, 0.2),
              20px 20px rgba(0, 98, 90, 0.1),
              25px 25px rgba(0, 98, 90, 0.05);


      label {
        display: block;
        margin: 0;
        padding: 1rem 1rem .4rem;
        background-color: ivory;
        background-image: linear-gradient(0, rgba(255, 255, 255, .3) 0%, rgba(0, 0, 0, .1) 100%);
        border-top-left-radius: .3rem;
        border-top-right-radius: .3rem;
        color: rgb(0,165,70);
        font-weight: 800;
        letter-spacing: 1px;
        text-shadow: 1px 1px 0 rgba(0,165,70, .3);
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }

      input, textarea {
        border: 0;
        padding: 1rem;
        width: 100%;
        border-bottom-left-radius: .3rem;
        border-bottom-right-radius: .3rem;
        background-color: white;
        background-image: linear-gradient(180deg, rgba(227, 255, 231, .6) 0%, rgba(217, 231, 255, .6) 100%);
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);
      }

      span.ftype {
        border-radius: 0;
        border-bottom-left-radius: .3rem;
        border-bottom-right-radius: .3rem;
        background-color: white;
        background-image: linear-gradient(180deg, rgba(227, 255, 231, .6) 0%, rgba(217, 231, 255, .6) 100%);
        box-shadow: 2px 2px 0 rgba(0, 0, 0, 0.1);

        select {
          border: 0;
          width: 100%;
          height: 4rem;
          border: none;
          background: transparent;
        }
      }

      br { display: none; }

      .form-group {
      
        span {
          display: block;

          &::before {
            content: '';
            display: block;
            margin-top: -.3rem;
            height: .3rem;
            width: 100%;
            background: linear-gradient(
              -45deg, 
              #9bc85a 25%, 
              rgb(0, 165, 70) 25%, 
              rgb(0, 165, 70) 50%, 
              #9bc85a 50%, 
              #9bc85a 75%, 
              rgb(0, 165, 70) 75%, 
              rgb(0, 165, 70)
              );
            background-size: 20px 20px;
            background-position: 0 0;
          }
        }

      }

      &::before {
        content: '';
        padding: 6rem;
        height: 120%;
        width: 110%;
        position: absolute;
        top: -1rem;
        left: -1rem;
        
        border: 1px solid #e7e7e7;
        background: #59C173;
        background: linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
        opacity: .5;
  
        transform: rotate(-8deg);
        z-index: -3;
      }
      &::after {
        content: '';
        padding: 6rem;
        height: 120%;
        width: 110%;
        position: absolute;
        top: -1rem;
        left: -1rem;
        
        border: 1px solid #e7e7e7;
        background: #59C173;
        background: linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
        opacity: .5;
  
        transform: rotate(-16deg);
        z-index: -4;
      }
    }

    &::before {
      content: '';
      padding: 6rem;
      height: 120%;
      width: 110%;
      position: absolute;
      top: -1rem;
      left: -1rem;
      
      border: 1px solid #e7e7e7;
      background: #59C173;
      background: linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
      opacity: .5;

      transform: rotate(4deg);
      z-index: -1;
    }
    &::after {
      content: '';
      padding: 6rem;
      height: 120%;
      width: 110%;
      position: absolute;
      top: -2rem;
      left: -2rem;
      
      border: 1px solid #e7e7e7;
      background: #59C173;
      background: linear-gradient(to right, #5D26C1, #a17fe0, #59C173);
      opacity: .5;

      transform: rotate(8deg);
      z-index: -2;
    }
  }

}

`;



const pageall = css`

  #page-1 a {
    color: #87af4e;
    font-weight: bold;
    text-decoration: none;
  }
  #page-1 a:hover {
    color: plum;
    text-decoration: underline;
  }
  #page-2 h1 {
    padding: 2rem 2rem 2rem 1rem;
    font-size: 4rem;
    text-align: left;
  }

  .page h1 {
    padding: 2rem 0 2rem;
    margin: 0 15% 1.5rem;
    font-size: 4rem;
  }

`;


const pageStyles = colors =>
  css([
    //elementBase(colors),
    discoListStyle,
    pagehome,
    pagedesign,
    pagedev,
    pagedata,
    pagemarketing,
    pagecontact,
    pageall
  ]);

export default pageStyles;