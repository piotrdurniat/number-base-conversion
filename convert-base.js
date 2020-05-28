try {
    const input = process.argv[2];
    const inputBase = parseInt(process.argv[3]);
    const outputBase = parseInt(process.argv[4]);

    if (!input || !inputBase || !outputBase) {
        throw "Pass 3 arguments: input inputBase outputBase";
    }

    if (outputBase < 2 || outputBase > 36) {
        throw "Output base must be between 2 and 36";
    }

    console.log(convertBase(input, inputBase, outputBase));
} catch (e) {
    console.error(e);
}

function convertBase(input, inputBase, outputBase) {
    return parseInt(input, inputBase).toString(outputBase);
}
