import Item from "./Item";
import { WORKS, SERVICES, COMPANY, SUPPORT, BRANDING, WEBSITE } from "./Menus";

const ItemsContainer = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-3">
      <Item Links={WORKS} title="SERVICES" />
      <Item Links={SERVICES} title="RESOURCES" />
      <Item Links={COMPANY} title="COMPANY" />
      <Item Links={SUPPORT} title="SUPPORT" />
      <Item Links={BRANDING} title="BRANDING" />
      <Item Links={WEBSITE} title="WEBSITE" />
    </div>
  );
};

export default ItemsContainer;
