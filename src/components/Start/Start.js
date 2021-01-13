import React, { Fragment } from 'react';

import Container from 'components/Container';
import { LeftContainer, RightContainer, TitleLogo, TitleLogoBold, LogoContainer, Image } from './Start.css';
import Text from 'components/Text';
import ColorChanger from 'components/ColorChanger';

const Start = ({ children, ...props }) => {

    const { name, links } = props;

    return (
        <Fragment>
            <LogoContainer>
                <Text>
                    Day <b>planner</b>
                </Text>
            </LogoContainer>
            <Container>
                <Text type="title">{name}</Text>
                <ColorChanger />

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