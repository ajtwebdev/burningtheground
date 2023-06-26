import LayoutJs from "../components/layoutJs";
import { getPageByUri } from "../lib/pages";
import PageComponents from "../lib/pageComponents";

export default function HomePage(props) {
  const { page } = props;
  const { content, acf } = page;
  const hasFlexibleFields =
    Array.isArray(acf.flexibleFields) && acf.flexibleFields.length > 0;
  return (
    <LayoutJs>
      <div>
        {/* Iterate over ACF flexible fields and pass props to imported component */}
        {hasFlexibleFields && (
          <div>
            {acf.flexibleFields.map((obj, index) => {
              let DynamicComponent = PageComponents.get(obj.type);
              if (DynamicComponent !== undefined && DynamicComponent !== null) {
                return <DynamicComponent key={index} {...obj} />;
              }
            })}
          </div>
        )}
        <div
          dangerouslySetInnerHTML={{
            __html: content,
          }}
        />
      </div>
    </LayoutJs>
  );
}

export async function getStaticProps() {
  const { page } = await getPageByUri("/home");
  return {
    props: {
      page,
    },
  };
}
