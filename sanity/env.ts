export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2025-02-04'

export const dataset = assertValue(
  process.env.NEXT_PUBLIC_SANITY_DATASET,
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue(
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue(
 "skcm4VKWWGDllgzMyJ5ld7P85bmuuRbcHCMp9g9CiUigE7scaKTGRYldLqQqex8mQia9aqcheu0xV46ni0Lntp1NU1iYMwNuqX7pxMdtkEuXwhlcIXZrndjfTV03Ar0mkkUV5u28FQZWXZk5kTDMc2LKoyYPWU3GSQLoLrltpwCLApwDQNDy",
  'Missing environment variable: SANITY_API_TOKEN'
)

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
