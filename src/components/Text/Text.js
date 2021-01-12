import React, { useMemo } from 'react';

import { Title, Subtitle, SubtitleCenter, SubtitleOther, Paragrapth } from './Text.css';

const Text = ({ type, children }) => {

    const Component = useMemo(() => {
        switch (type) {
            case 'default':
                return Paragrapth;
            case 'title':
                return Title;
            case 'subtitle':
                return Subtitle;
            case 'subtitle-center':
                return SubtitleCenter;
            case 'subtitle-other':
                return SubtitleOther;
            default:
                return Paragrapth;
        }
    }, [type]);

    return (
        <Component>
            {children}
        </Component>
    )
}

export default Text;