
@file:Suppress(
  "KotlinRedundantDiagnosticSuppress",
  "PropertyName",
  "MayBeConstant",
  "RedundantVisibilityModifier",
  "RedundantCompanionReference",
  "RemoveEmptyClassBody",
  "SpellCheckingInspection",
  "unused",
)

package com.google.firebase.dataconnect.generated



public interface CreateDataMutation :
    com.google.firebase.dataconnect.generated.GeneratedMutation<
      ExampleConnector,
      CreateDataMutation.Data,
      Unit
    >
{
  

  
    @kotlinx.serialization.Serializable
  public data class Data(
  
    val client_insert: ClientKey,
  
    val project_insert: ProjectKey,
  
    val lead_insert: LeadKey,
  
    val milestone_insert: MilestoneKey,
  
    val asset_insert: AssetKey,
  
  ) {
    
    
  }
  

  public companion object {
    public val operationName: String = "CreateData"

    public val dataDeserializer: kotlinx.serialization.DeserializationStrategy<Data> =
      kotlinx.serialization.serializer()

    public val variablesSerializer: kotlinx.serialization.SerializationStrategy<Unit> =
      kotlinx.serialization.serializer()
  }
}

public fun CreateDataMutation.ref(
  
): com.google.firebase.dataconnect.MutationRef<
    CreateDataMutation.Data,
    Unit
  > =
  ref(
    
      Unit
    
  )

public suspend fun CreateDataMutation.execute(

  

  ): com.google.firebase.dataconnect.MutationResult<
    CreateDataMutation.Data,
    Unit
  > =
  ref(
    
  ).execute()


