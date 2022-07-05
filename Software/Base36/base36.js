let num = 0;

class base36Converter {
    WebGLActiveInfo() {
        return {
            id: 'base36Converter',
            name: 'Base36 Converter',
            blocks: [
                {
                    opcode: 'convertToBase36',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Convert [number] to Base36',
                    arguments: {
                        number: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '12345'
                        }
                    }
                },
                {
                    opcode: 'convertToBase36',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Convert [number] to Base10',
                    arguments: {
                        number: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: 'helloworld'
                        }
                    }
                },
                {
                    opcode: 'convertToBinary',
                    blockType: Scratch.BlockType.REPORTER,
                    text: 'Convert [number] to binary',
                    arguments: {
                        number: {
                            type: Scratch.ArgumentType.STRING,
                            defaultValue: '12345'
                        }
                    }
                }
            ]
        };
    }
    convertToBase36(args) {
        num = args.number;
        return num.toString(36);
    }
    convertToBase10(args) {
        num = args.number;
        return num.toString(10);
    }
    convertToBinary(args) {
        num = args.number;
        return num.toString(2);
    }
}
Scratch.Extensions.Register(new base36Converter());
