import { LeftCircleFilled } from '@ant-design/icons';

export const LeftArrow: React.FC<{
  currentSlide: number;
  slideCount: number;
  onClick?: () => void;

}> = ({ onClick }) => (
  <div className="slick-prev slick-arrow">
    <LeftCircleFilled onClick={ onClick } />
  </div>
);
