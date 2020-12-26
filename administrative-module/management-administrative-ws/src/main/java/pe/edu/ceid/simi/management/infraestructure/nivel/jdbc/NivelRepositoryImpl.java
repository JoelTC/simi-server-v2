package pe.edu.ceid.simi.management.infraestructure.nivel.jdbc;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.simple.SimpleJdbcCall;
import org.springframework.stereotype.Component;
import org.springframework.util.LinkedCaseInsensitiveMap;

import pe.edu.ceid.simi.management.domain.nivel.model.Nivel;
import pe.edu.ceid.simi.management.domain.nivel.repository.NivelRepository;

@Component
public class NivelRepositoryImpl implements NivelRepository {

	@Autowired
	private JdbcTemplate jdbcTemplate;

	@Autowired
	private NivelRowMapper row;
	
	@Override
	public List<Nivel> getNiveles() {
		String query = "SELECT * FROM txnivel";
		List<Map<String, Object>> rows = this.jdbcTemplate.queryForList(query);
		List<Nivel> nivel = row.mapRowNivel(rows);
		
		return nivel;
	}

	@Override
	public Nivel getNivelById(int id) {
		String find ="SELECT * FROM txnivel WHERE ID_NIVEL  = " + id;
		List<Nivel> nivel = this.row.mapRowNivel(this.jdbcTemplate.queryForList(find));
		
		if (nivel.size() > 0) {
			return nivel.get(0);
		}
		
		return null;
	}
	
	@SuppressWarnings({ "rawtypes", "unchecked" })
	@Override
	public List<Nivel> getNivelByIdioma(int id) {
		SimpleJdbcCall jdbcCall = new SimpleJdbcCall(jdbcTemplate).withProcedureName("SP_NIVEL_LIST");
		Map<String, Object> params = new HashMap<>();
        params.put("P_ID_IDIOMA", id);
		
		 Map<String, Object> result = jdbcCall.execute(params);
		 List<Nivel> nivel= new ArrayList<>();
		 List<LinkedCaseInsensitiveMap> r = (List<LinkedCaseInsensitiveMap>) result.values().toArray()[0];
		 r.forEach((v) -> nivel.add(row.mapRowNiveles(v)));
		 return nivel;
	}

}
