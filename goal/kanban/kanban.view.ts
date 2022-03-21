namespace $.$$ {

	export class $org_goal_kanban extends $.$org_goal_kanban {

		columns() {
			return this.stage_list().map( name => this.Stage( name ) )
		}

		stage_title( name: string ) {
			return name
		}

		stage_cards( id: string ) {
			return this.card( id ).map( obj => this.Card( obj ) )
		}

		card_content( obj: $mol_view) {
			return obj
		}

		transfer_adopt( transfer : DataTransfer ) {
			debugger
			const id = transfer.getData( "text/plain" )
			if( !id ) return

			return id
		}

		receive_before( anchor : string , stage : string ) {
			if( anchor === stage ) return
			
			const list = this.stage_list().filter( id => id !== stage )
			
			const index = list.indexOf( anchor )
			list.splice( index + 1 , 0 , stage )
			
			this.stage_list( list )
		}

		receive( stage : string ) {
			const list = this.stage_list().filter( p => p !== stage )
			list.push( stage )
			
			this.stage_list( list )
		}

	}

	export class $org_goal_kanban_stage extends $.$org_goal_kanban_stage {



	}

}
