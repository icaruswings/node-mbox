declare module 'node-mbox' {
    import { Transform, Writable, Readable } from 'stream';
  
    interface MboxOptions {
      includeMboxHeader?: boolean;
    }
  
    /**
     * Class implements Transform stream. Transforming lines to messages as Buffers.
     */
    export class Mbox extends Transform {
      constructor(opts?: MboxOptions);
    }
  
    /**
     * MboxStream simply pipes `split('\n')` with Mbox().
     * 
     * @param readStream An instance of Readable stream.
     * @param opts Params passed to Mbox.
     * @returns An instance of Mbox stream.
     */
    export function MboxStream(readStream: Readable, opts?: MboxOptions): Mbox;
  
    /**
     * MboxStreamConsumer is simple abstract class extending Writable.
     * You must implement consume method which consumes particular messages.
     */
    export class MboxStreamConsumer extends Writable {
      constructor(opts?: any);
  
      /**
       * Consume method to be implemented by subclasses.
       * 
       * @param message Message in buffer format.
       * @param encoding Encoding of the message.
       * @param cb Callback function.
       */
      consume(message: Buffer, encoding: BufferEncoding, cb: (err?: Error) => void): void;
    }
  }
  