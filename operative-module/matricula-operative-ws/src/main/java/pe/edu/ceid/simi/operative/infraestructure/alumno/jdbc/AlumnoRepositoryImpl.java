package pe.edu.ceid.simi.operative.infraestructure.alumno.jdbc;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.InvalidDataAccessApiUsageException;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedCaseInsensitiveMap;

import pe.edu.ceid.simi.operative.domain.alumno.model.AlumnoDTO;
import pe.edu.ceid.simi.operative.domain.alumno.repository.AlumnoRepository;

@Component
public class AlumnoRepositoryImpl implements AlumnoRepository{

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private AlumnoRowMapper row;
	
	/*@Override
	public List<AlumnoDTO> getAlumnoById(int id) {
		String query = "CALL USP_ALUMNO_LIST ("+id+")";
		
		List<AlumnoDTO> alumno = this.row.mapRowAlumno(this.jdbcTemplate.queryForList(query));
		if (alumno.size() > 0) {
			return alumno.get(0)
		}
		return null;
	}*/
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public AlumnoDTO getAlumnoById(int id) {
		try {
			SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate).withProcedureName("USP_ALUMNO_LIST");
			Map<String, Object> params = new HashMap<>();
			params.put("P_ID_USUARIO", id);
			Map<String, Object> result = jdbcCall.execute(params);
			List<LinkedCaseInsensitiveMap> r = (List<LinkedCaseInsensitiveMap>) result.values().toArray()[0];
			return row.mapRowAlumno(r.get(0));
		} catch (InvalidDataAccessApiUsageException e) {
			return null;
		}
	}

}
