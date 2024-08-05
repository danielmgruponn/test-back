import { FastifyInstance } from "fastify";
import { fastifyS3BucketsPlugin } from "fastify-s3-buckets";
import { S3Client } from '@aws-sdk/client-s3'

export async function s3Config(server: FastifyInstance)
{
    const s3Config = {
        endpoint: process.env.AWS_URL || '',
        region: process.env.AWS_DEFAULT_REGION || '',
        credentials: {
            accessKeyId: process.env.AWS_ACCESS_KEY_ID || '',
            secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY || ''
        }
    }
    const s3Client = new S3Client(s3Config)

    server.register(fastifyS3BucketsPlugin, {
        s3Client,
        buckets: [
            {
                Bucket: process.env.AWS_BUCKET || ''
            }
        ]
    })
}

