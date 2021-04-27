'use strict'
const response = require('../helpers/response');

async function beranda(require, reply) {
    let data = {'isi': 'beranda'}
    return response.ok(data, "berhasil", reply)
}

async function getData(request, reply) {
    const pool = await this.pg.connect();
    let nama = request.body.extraParam.nama;
    console.log(request.body.extraParam);
    if(!nama || nama === 'null'){
        nama = ''; 
    }
    const orderby = parseInt(request.body.sortCol) + 1;
    const sql = "SELECT id, nama, keterangan FROM daftarsiswa where nama ilike '%'||$3||'%' order by "
    + orderby 
    + ' ' 
    + request.body.sortDir 
    + " limit $1 offset $2";
    console.log(sql);
    const res = await pool.query(sql, [request.body.length, request.body.start, nama]);
    console.log(res);
    const sqlcount = "SELECT COUNT(id) FROM daftarsiswa where nama ilike '%'||$1||'%'";
    const recordstotal = await pool.query(sqlcount, [nama]);
    let total = recordstotal.rows[0].count;
    let draw = request.body.draw;
    await pool.release();
    return response.datatable(draw, total, res.rows, "berhasil", reply)
}
async function savedata(request, reply){
    console.log(request.body);

    const pool = await this.pg.connect();
    let nama = request.body.nama;
    let keterangan = request.body.keterangan;
    const sql = 'INSERT INTO public.daftarsiswa(nama, keterangan) VALUES ($1, $2) RETURNING id'
    const res = await pool.query(sql,[nama,keterangan]);
    await pool.release();
    let hasil= {};
    hasil['key'] = res.rows[0].id;
    hasil['kode'] = 200;
    hasil['deskripsi'] = 'insert data berhasil';
    return response.ok(hasil,"OK",reply)
}
async function getDataKelasById(request, reply) {
    let sql = 'SELECT id, nama, keterangan FROM daftarsiswa WHERE id = $1';
    const id = request.params.id;
    const pool = await this.pg.connect();
    const res = await pool.query(sql,[id]);
    await pool.release();
    response.ok(res.rows, "OK", reply);
}

module.exports = {
    beranda,getData,savedata,getDataKelasById
};