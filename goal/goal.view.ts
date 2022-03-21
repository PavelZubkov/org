namespace $.$$ {

	export class $org_goal extends $.$org_goal {

		project( id: string ) {
			return this.domain().project().item(id)
		}

		task( id: string ) {
			return this.domain().task( id )
		}

		arg( key: string, value?: string ) {
			return this.$.$mol_state_arg.value( key , value )
		}

		pages() {

			if ( !this.Gate().signed() ) {
				return [ this.Gate() ]
			}

			const project_id = this.arg( 'project' )
			const task_id = this.arg( 'task' )

			return [
				this.Home(),
				... project_id ? [ this.Project( project_id ) ] : [],
				... task_id ? [ this.Task( task_id ) ] : [],
				this.Kanban(),
			]
		}

		@ $mol_mem_key
		card( id: string, next?: $mol_view[] ) {
			return next ?? [id+1, id+2,id+3].map( id => this.Card(id) )
		}

		card_name( id: string ) {
			return id
		}

	}

}
