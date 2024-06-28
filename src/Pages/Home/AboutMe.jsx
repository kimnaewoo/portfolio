export default function AboutMe() {
  return (
    <section id="AboutMe" className="about--section">
      <div className="about--section--img">
        <img src="./img/hero_img.jpg" alt="AboutMe" />
      </div>
      <div className="hero--section--content--box about--section--box">
        <div className="hero--section--content">
          <p className="section--title">About</p>
          <h1 className="skills--section--heading">About Me</h1>
          <p className="hero--section--description">
            이름 : 김내우
            <br />
            나이 : 1994. 07. 15
            <br />
            주소 : 서울시 관악구 <br />
            메일 : gnag0403@naver.com <br />
            {/* 안녕하세요!
            <br />
            다양한 배경으로 성장에 노하우가 있는 프론트엔드 신입개발자 김내우입니다. 최신 기술과 이슈를 끊임없이
            연구하고 꾸준히 학문을 쌓아, 작은 부분까지도 가장 효율적인 방법으로 구현할수 있는 개발자가 되는것이
            목표입니다. <br />
            그렇기에, 프론트엔드 개발자를 하기 위해 학원을 다니며 실무에 필요한 지식을 습득했고 지금은 취업을 위해
            포트폴리오를 만들며 부족한 부분을 채워나가고 있습니다. <br />
            빠르게 변하는 웹개발트랜드 속에서, 다양한 경험으로 배경을 갖춘 저에게 비전공은 더 큰 전공이라고 생각하고,
            새로운 시도와 함께 사용자 입장을 고려하며 성실하게 성장하는 프론트엔드 개발자가 되겠습니다. */}
          </p>
        </div>
      </div>
    </section>
  );
}
