import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import Table from '@mui/material/Table'
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
          ✨ C++ ✨
        </h1>
        </Link>
        <p className={styles.subtitle}> learn the basics of C++</p>
        <div className={styles.row}>
            <Card className={styles.card}>
                <h2>Intro to C++</h2>
                <p>C++ was introduced in 1979 by Bjarne Stroustrup as a <b>fork of C</b> that introduced <b>object-oriented</b> features like classes.
                Prominent features of C++ include compiler directives (using #include) and dynamic memory allocation and management. </p>
            </Card>
            <Card className={styles.card}>
                <h2>Variables and Type</h2>
                <p>C++ variables require a <b>name</b> and <b>type</b>. Variables may be of type <b>char</b> (single character, 1 byte), <b>string</b> (series of characters, size varies), <b>int</b> (integer number, 4 bytes), <b>float</b> ("floating-point" decimal number, 4 bytes), <b>double</b> (a doubly precise decimal, 8 bytes), or <b>bool</b> (boolean value of "true" or "false", 1 byte). Valid variable names contain only letters, digits, and underscores (_) and may not use special reserved names.</p>
                <p>Note that in order to use strings (a class rather than a basic type), you will need to use the compiler directive <b>{"#include<string>"}</b>.</p>
            </Card>
            
        </div>
      </main>

      <footer className={styles.footer}>
        <p>powered by the tears of CS students</p>
      </footer>
    </div>
  )
}
