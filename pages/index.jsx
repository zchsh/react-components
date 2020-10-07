import createPage from '@hashicorp/octavo/page'
import createStaticProps from '@hashicorp/octavo/getStaticProps'
import Head from 'next/head'
import Link from 'next/head'
import { CsRenderer } from '../packages/hashi-stack-menu'

const components = { Head, Link, CsRenderer }

export default createPage({ components })
export const getStaticProps = createStaticProps({ components })
