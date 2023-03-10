import { MyNavLink } from 'components/ui';

const LargeNav = ({ data }) => {
  return (
    <ul className="hidden h-full bg-inherit md:flex ">
      {data.map((item, index) => (
        <li
          key={index}
          className="bg group flex items-center justify-center bg-inherit px-2 text-xl  "
        >
          <MyNavLink text={item.title} path={item.path} />
          {item.children.length > 0 && (
            <ul className="absolute top-full left-0 hidden w-full flex-wrap bg-inherit p-2 group-hover:flex ">
              {item.children.map((subItem, index) => (
                <li
                  key={index}
                  className="m-1 border border-dashed border-red-700 py-2 px-4 text-base"
                >
                  <MyNavLink
                    fetchId={subItem.id}
                    text={subItem.title}
                    path={`${item.path}/${subItem.path}`}
                  />
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
};

export default LargeNav;
