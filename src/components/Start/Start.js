import React, { Fragment } from 'react';

import Container from 'components/Container';
import { LeftContainer, RightContainer, TitleLogo, TitleLogoBold, LogoContainer, Image } from './Start.css';
import Text from 'components/Text';

const Start = ({ children, ...props }) => {

    const { name, links } = props;

    return (
        <Fragment>
            <LogoContainer>
                <p>
                    Day <span>planner</span>
                </p>
            </LogoContainer>
            <Container>
                <Text type="title">{name}</Text>
                <Container type="divitedInside">
                    <LeftContainer>
                        <Image />
                        <TitleLogo>Plan your day to <TitleLogoBold>be smart</TitleLogoBold></TitleLogo>
                    </LeftContainer>
                    <RightContainer>

                        {children}

                    </RightContainer>
                </Container>
                <div>
                    {links}
                </div>
            </Container>
        </Fragment>
    )
}

export default Start;