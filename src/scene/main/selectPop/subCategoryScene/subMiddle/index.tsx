import styles from "./subMiddle.module.scss";
import { MdCancel } from "react-icons/md";
import cb from "classnames/bind";

const cn = cb.bind(styles);
interface ISubMiddleProps {
  title: string;
  img: string;
  setSelected: Function;
}
const SubMiddle = (props: ISubMiddleProps) => {
  const { title, img, setSelected } = props;
  return (
    <div className={cn("container")}>
      <img src={img} alt={"subcategory-img"} />

      <div className={cn("text-wrapper")}>
        <div className={cn("title-wrapper")}>
          <p>{title}</p>
          <MdCancel
            color={"#a6a6a6"}
            size={30}
            onClick={() => setSelected(-1)}
          />
        </div>
        <p>세부카테고리를 골라주세요</p>
      </div>
    </div>
  );
};

export default SubMiddle;
