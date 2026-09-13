
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



public interface DeleteDataMutation :
    com.google.firebase.dataconnect.generated.GeneratedMutation<
      ExampleConnector,
      DeleteDataMutation.Data,
      Unit
    >
{
  

  
    @kotlinx.serialization.Serializable
  public data class Data(
  
    val client_delete: ClientKey?,
  
    val project_delete: ProjectKey?,
  
    val lead_delete: LeadKey?,
  
    val milestone_delete: MilestoneKey?,
  
    val asset_delete: AssetKey?,
  
  ) {
    
    
  }
  

  public companion object {
    public val operationName: String = "DeleteData"

    public val dataDeserializer: kotlinx.serialization.DeserializationStrategy<Data> =
      kotlinx.serialization.serializer()

    public val variablesSerializer: kotlinx.serialization.SerializationStrategy<Unit> =
      kotlinx.serialization.serializer()
  }
}

public fun DeleteDataMutation.ref(
  
): com.google.firebase.dataconnect.MutationRef<
    DeleteDataMutation.Data,
    Unit
  > =
  ref(
    
      Unit
    
  )

public suspend fun DeleteDataMutation.execute(

  

  ): com.google.firebase.dataconnect.MutationResult<
    DeleteDataMutation.Data,
    Unit
  > =
  ref(
    
  ).execute()


