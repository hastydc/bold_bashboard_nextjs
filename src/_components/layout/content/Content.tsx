import Style from './content.module.scss';

type ContentProps = {
  children: React.ReactNode;
};

const Content = ({ children }: ContentProps) => {
  return (
    <>
      <div className={Style.content}>{children}</div>
    </>
  );
};

export default Content;
