namespace $ {

	export class $org_gate_domain extends $mol_object2 {

		@ $mol_mem
		static state() {
			return new $mol_state_shared
		}

		state() {
			return $org_gate_domain.state()
		}

		@ $mol_mem
		user() {
			const obj = new $org_gate_user_service
			obj.domain = $mol_const( this )
			return obj
		}

	}

}
