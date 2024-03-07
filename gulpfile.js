
const gulp = require('gulp');
const path = require('path')
const rimraf = require('rimraf');
const ts = require('gulp-typescript');
const babel = require('gulp-babel');
const merge2 = require('merge2'); 
const {compilerOptions} = require('./tsconfig.json');
const tsConfig = {
  noUnusedParameters: true,
  noUnusedLocals: true,
  strictNullChecks: true,
  target:'es6',
  jsx:'react',
  moduleResolution:'node',
  declaration:true,
  allowSyntheticDefaultImports:true,
  ...compilerOptions

}


const babelConfig = require('./babel.config.js')


const source = [
  'components/**/*.{jsx,tsx,js,ts}',
  '!components/**/*.stories.{jsx,tsx,js,ts}',
  '!components/**/e2e/*',
  '!components/**/unit/*',
]

function getProjectPath(filePath){

  return path.join(process.cwd(),filePath)
}

const base = getProjectPath('components')
const libDir = getProjectPath('lib')
const esDir = getProjectPath('es')

function compile(modules){
  const targetDir = modules===false?esDir:libDir

  rimraf.sync(targetDir)

  const {js,dts} = gulp.src(source,{base}).pipe(ts(tsConfig))

  const dtsStream = dts.pipe(gulp.dest(targetDir))

  let jsStream = js
  if(modules){
    jsStream=js.pipe(babel(babelConfig))
  }
  jsStream = jsStream.pipe(gulp.dest(targetDir))

  return merge2([jsStream,dtsStream])

}


gulp.task('compile-with-es',(done)=>{

  console.log('compile to es.....')
  compile(false).on('finish',done)
})
gulp.task('compile-with-lib',(done)=>{

  console.log('compile to js ......')

  compile().on('finish',done)
})

gulp.task('compile',gulp.parallel('compile-with-es','compile-with-lib'))