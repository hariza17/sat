<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Intervencion extends Model
{
    //

	protected $table = 'intervenciones';

	public $timestamps=false;

	protected $fillable=['estado','estrategias_id','fecha_inicio','archivo_personal_id'];

	public function estrategias()
    {
        return $this->belongsTo('App\Models\Estrategia', 'id');
    }

    public function archivos_Personal()
    {
        return $this->belongsTo('App\Models\ArchivoPersonal', 'archivo_personal_id', 'id');

    }

    public function usuario()
    {
        return $this->belongsTo('App\Models\Usuario', 'usuarios_codigo', 'id');

    }

    public function acciones_aplicadas()
    {
        return $this->hasMany('App\Models\AccionAplicada', 'id');
    }

}