namespace $.$$ {

	export class $org_goal_domain extends $mol_object2 {

		@ $mol_mem
		state() {
			return new $mol_state_shared
		}

		@ $mol_mem
		gate() {
			return new $org_gate_domain
		}

		@ $mol_mem_key
		person( id: string ) {
			const obj = new $org_goal_person
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			return obj
		}

		@ $mol_mem
		person_current() {
			return this.person( this.gate().sign().user().id() )
		}

		@ $mol_mem_key
		task( id: string ) {
			const obj = new $org_goal_task
			obj.id = $mol_const( id )
			obj.domain = $mol_const( this )
			return obj
		}

		@ $mol_mem
		project() {
			const obj = new $org_goal_project_service
			obj.domain = $mol_const( this )
			return obj
		}

	}

}
