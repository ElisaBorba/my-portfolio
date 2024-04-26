import { RightCircleFilled } from '@ant-design/icons';

export const RightArrow: React.FC<{
  currentSlide: number;
  slideCount: number;
  onClick?: () => void;

}> = ({ onClick }) => (
  <div className="slick-next slick-arrow">
    <RightCircleFilled onClick={ onClick } />
  </div>
);
