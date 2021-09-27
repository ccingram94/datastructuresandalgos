import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import { createTheme } from '@mui/material/styles'
import styles from '../styles/Home.module.css'
import { withTheme } from '@emotion/react'


export default function Languages() {
  return (
    <div className={styles.container}>
      <Head>
        <title> Data Structures</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <Link href="/">
        <h1 className={styles.title}>
          ✨ Algorithm Analysis ✨
        </h1>
        </Link>
        <p className={styles.subtitle}> time complexity and space complexity </p>
        <div className={styles.column}>
            <Card className={styles.card}>
                <h2>Intro to Algorithm Analysis</h2>
                <p><b>Algorithm analysis</b> describes an algorithm's <b>time complexity</b> and <b>space complexity</b>.</p>
                <p><b>Time complexity</b> means how long an algorithm takes to complete.</p>
                <p><b>Space complexity</b> means how much memory an algorithm uses.</p><br/>
                <p>We describe time and space complexity using <b>Big-O Notation</b></p>
            </Card>
            <Card>
                <div className={styles.code}>
                    <h2>common Big O runtimes</h2>
                    <pre>
                      <code>
                        <p>NAME:            BIG O:</p>
                        <p>constant         O(1)</p>
                        <p>linear           O(n)</p>
                        <p>logarithmic      O(log n)</p>
                      </code>
                    </pre>
                  </div></Card>
        </div>
      </main>

      <footer className={styles.footer}>
        <p>powered by the tears of CS students</p>
      </footer>
    </div>
  )
}
