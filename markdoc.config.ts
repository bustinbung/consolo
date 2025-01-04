import { defineMarkdocConfig, nodes, component } from '@astrojs/markdoc/config';

export default defineMarkdocConfig({
    nodes: {
        document: {
            ...nodes.document,
            render: undefined,
        },
    },
    tags: {
        image: {
            attributes: {
                caption: {
                    type: String,
                },
                ...nodes.image.attributes,
            },
            render: component('./src/components/markdoc/MarkdocFigure.astro'),
        },
    },
});