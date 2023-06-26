import LayoutJs from "../components/layoutJs";
import { Section, Container } from "../components/layoutComponents";
import Seo from "../components/seo";

export default function Custom404() {
  return (
    <LayoutJs>
      <Seo title="404: Not Found | Burning The Ground" />

      <Section>
        <Container>
          <h1>404: This page does not exist</h1>
        </Container>
      </Section>
    </LayoutJs>
  );
}
