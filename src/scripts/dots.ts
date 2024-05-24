export const dotClick = function(collection: string, id: number) {
    const entriesWrapper = document.getElementsByClassName(`collection-wrapper ${collection}`)[0];
    const targetEntry = entriesWrapper.children[id];
    targetEntry.scrollIntoView({
        behavior: 'smooth',
        block: 'center',
        inline: 'center',
    });

    const previousDot = document.getElementsByClassName(`selected ${collection}`)[0];
    const targetDot = document.getElementsByClassName(`dot ${collection}`)[id];
    previousDot.classList.remove('selected');
    targetDot.classList.add('selected');
}