import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { RootState } from "../../data/redux/store";
import upperAllFirst from "../../util/upperAllFirst";
import * as Styled from "./AppHeader.styled";
import Avatar from "../Avatar/Avatar";
import { useWindowSize } from "@uidotdev/usehooks";

interface AppHeaderProps {
   title?: string;
   classname?: string;
   /**
    * Overrides back click action
    */
   onBackClick?: () => void;
}

const AppHeader: React.FC<AppHeaderProps> = ({
   title,
   classname,
   onBackClick,
}) => {
   const groomingShop = useSelector(
      (state: RootState) => state.slice.groomingShop
   );
   const user = useSelector((state: RootState) => state.slice.user);

   const navigate = useNavigate();
   const location = useLocation();
   const windowSize = useWindowSize();
   const isEditPage = location.pathname.includes('edit');

   const handleBackClick = () => {
      if (onBackClick) {
         onBackClick();
      } else {
         navigate(-1);
         setTimeout(() => {
            scrollTo(0, 0);
         }, 100);
      }
   };

   return (
      <Styled.Container className={classname ?? ""}>
         {windowSize.width && (windowSize.width < 480) ? (
            <div className="flex flex-col justify-center w-full">
					<div className="flex justify-between">
						{(location.pathname.split('/')[2] !== "appointment" && !isEditPage) && (
							<Styled.BackBtn onClick={handleBackClick}>
								<FontAwesomeIcon icon={faArrowLeft} />
							</Styled.BackBtn>
						)}
						{user && (
                     <Styled.Account>
                        <Avatar
                           size={windowSize.width < 481 ? 35 : 40}
                           name={user.firstName}
                        />
                     </Styled.Account>
                  )}
					</div>
               <div className="flex justify-center">
                  <Styled.Title>
                     <h1 className="m-0">
                        {title ?? upperAllFirst(groomingShop?.name ?? "")}
                     </h1>
                  </Styled.Title>
               </div>
            </div>
         ) : (
            <div className="flex justify-center">
               {(location.pathname.split('/')[2] !== "appointment" && !isEditPage) && (
                  <Styled.BackBtn onClick={handleBackClick}>
                     <FontAwesomeIcon icon={faArrowLeft} />
                  </Styled.BackBtn>
               )}
               <div className="flex">
                  <Styled.Title>
                     <h1 className="m-0">
                        {title ?? upperAllFirst(groomingShop?.name ?? "")}
                     </h1>
                  </Styled.Title>
                  {user && (
                     <Styled.Account>
                        <Avatar
                           size={40}
                           name={user.firstName}
                        />
                     </Styled.Account>
                  )}
               </div>
            </div>
         )}
      </Styled.Container>
   );
};

export default AppHeader;
