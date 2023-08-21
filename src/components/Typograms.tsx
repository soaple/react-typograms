import { useCallback } from 'react';
import typograms from 'lib/typograms';

interface TypogramsProps {
    content: string;
}

function Typograms(props: TypogramsProps) {
    const { content } = props;

    const callbackRef = useCallback(
        (node: HTMLDivElement) => {
            while (node.lastElementChild) {
                node.removeChild(node.lastElementChild);
            }

            const svgElement = typograms.create(content, 0.3);
            node.appendChild(svgElement);
        },
        [content]
    );

    return <div ref={callbackRef} />;
}

export default Typograms;
