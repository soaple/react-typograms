import { useRef, useEffect } from 'react';
import typograms from 'lib/typograms';

interface TypogramsProps {
    content: string;
}

function Typograms(props: TypogramsProps) {
    const { content } = props;

    const wrapperRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        if (wrapperRef.current) {
            const node = wrapperRef.current;
            while (node.lastElementChild) {
                node.removeChild(node.lastElementChild);
            }

            const svgElement = typograms.create(content, 0.3);
            node.appendChild(svgElement);
        }
    }, [content]);

    return <div ref={wrapperRef} />;
}

export default Typograms;
