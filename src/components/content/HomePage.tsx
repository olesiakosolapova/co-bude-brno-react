import { ContentContainer, ContentText, Img, Perex } from "./Content";

const HomePage = () => {
  return (
    <ContentContainer>
      <Perex>Brno myslí na budoucnost!</Perex>
      <ContentText>
        Proto spolu s odborníky i Brňany připravilo strategii, která definuje
        vizi rozvoje města až do roku 2050 a jasné priority do roku 2030. A to
        není všechno. Aby nezůstalo jen u plánování, pro nejbližší roky nyní
        vzniká seznam zcela konkrétních projektů, které pomohou Brno proměnit v
        moderní a sebevědomé město v srdci Evropy.
      </ContentText>
      <h1>#brno2050</h1>
      <Img src="https://cobude.brno.cz/wp-content/uploads/2021/11/iti.png" />
    </ContentContainer>
  );
};

export default HomePage;
