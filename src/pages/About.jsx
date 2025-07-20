import Card from "../components/Card";

import java from "../assets/java.svg";
import react from "../assets/react.svg";
import nodejs from "../assets/nodejs.svg";
import infinity from "../assets/infinity.svg";
import sql from "../assets/sql.svg";

function About() {
  return (
    <div className="mr-[2%] my-[2%]">
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum accusamus
        eligendi error sed corporis corrupti earum, labore modi asperiores
        nostrum voluptate ex provident a itaque, explicabo consequatur, iure
        fugit temporibus fuga maiores dolorum porro praesentium. In, similique
        suscipit nobis possimus ut dolore nesciunt culpa voluptas dicta, placeat
        tempore architecto quis?
      </p>
      <br />
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus, soluta
        iusto? Dicta sint similique velit harum, tempora veritatis labore quam
        adipisci repellat cum eligendi voluptate exercitationem nisi voluptatem
        voluptatibus provident.
      </p>
      <br />
      <div>What i'm doing</div>
      <br />
      <div className="flex flex-wrap justify-between gap-4">
        <Card
          logo={java}
          title={"Java"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto nobis excepturi accusantium libero beatae."
          }
        />
        <Card
          logo={react}
          title={"ReactJS"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto nobis excepturi accusantium libero beatae."
          }
        />
        <Card
          logo={nodejs}
          title={"NodeJS"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto nobis excepturi accusantium libero beatae."
          }
        />
        <Card
          logo={infinity}
          title={"DevOps"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto nobis excepturi accusantium libero beatae."
          }
        />
        <Card
          logo={sql}
          title={"SQL"}
          desc={
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio iusto nobis excepturi accusantium libero beatae."
          }
        />
      </div>
    </div>
  );
}

export default About;
